import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollTo = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToElement = useCallback((elementId: string, path: string = '/') => {
        // If we are already on the target page
        if (location.pathname === path) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to the page first, then scroll
            navigate(`${path}?scrollTo=${elementId}`);

            // We need a slight delay to allow navigation and rendering to happen
            // Ideally this would be handled by a layout effect listening to location state,
            // but setTimeout is a robust enough fallback for this simple case.
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    }, [navigate, location.pathname]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return { scrollToElement, scrollToTop };
};
