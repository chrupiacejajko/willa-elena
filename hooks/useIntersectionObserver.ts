import { useEffect, useRef } from 'react';

interface Options extends IntersectionObserverInit {
    triggerOnce?: boolean;
}

export const useIntersectionObserver = (options: Options = {}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;

    useEffect(() => {
        const currentElement = elementRef.current;
        if (!currentElement) return;

        // CRITICAL FIX FOR NAVIGATION BUG:
        // Check if element is already in viewport on mount (e.g., when navigating back)
        // This prevents images from "disappearing" when you navigate away and back
        const rect = currentElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        // Element is considered "in viewport" if at least threshold % is visible
        const isInViewport = (
            rect.top < windowHeight &&
            rect.bottom > 0 &&
            rect.left < windowWidth &&
            rect.right > 0
        );

        // If element is visible on mount, show it immediately without animation
        if (isInViewport) {
            currentElement.classList.add('is-visible');
            if (triggerOnce) {
                return; // Don't observe, already visible
            }
        }

        // If element already has 'is-visible' class, don't re-observe (performance)
        if (currentElement.classList.contains('is-visible') && triggerOnce) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (triggerOnce) {
                    observer.unobserve(entry.target);
                }
            } else if (!triggerOnce) {
                entry.target.classList.remove('is-visible');
            }
        }, { threshold, root, rootMargin });

        observer.observe(currentElement);

        return () => {
            // CRITICAL: Do NOT remove 'is-visible' class during cleanup
            // Only unobserve to prevent memory leaks
            observer.unobserve(currentElement);
        };
    }, [threshold, root, rootMargin, triggerOnce]);

    return elementRef;
};
