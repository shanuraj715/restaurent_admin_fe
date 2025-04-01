import React from 'react'
import { color } from 'console-log-colors';
import { useDispatch } from 'react-redux';
import { hideMenuSidebar, showMenuSidebar } from './store/actions/AppState';

// @TODO : Add shortcuts on this website.

function Shortcuts() {
    const dispatch = useDispatch();

    const createNewOrder = () => {

    }



    const shortcutsMapping = (event) => {

        // Check for Ctrl + Shift + N (Windows) or Command + Shift + N (Mac)
        if (
            (event.ctrlKey && event.key === 'n') ||
            (event.metaKey && event.key === 'n')
        ) {
            // Prevent the default behavior
            // event.preventDefault();

            // Your custom logic
            console.log('Ctrl + Shift + N or Command + Shift + N pressed');
            dispatch(showMenuSidebar())
            // alert('Custom action triggered!');
        }
    }

    React.useEffect(() => {
        const handleKeyDown = (event) => {
            console.log("REGISTERIMG SHORTCUTS")
            const focusedElement = document.activeElement;
            const isInputFocused =
                focusedElement.tagName === 'INPUT' ||
                focusedElement.tagName === 'TEXTAREA';

            // If an input or textarea is focused, skip the shortcut logic
            if (isInputFocused) {
                return;
            }
            // Check if user has not pressed Ctrl or Command keys then return
            if (!event.ctrlKey && !event.metaKey) {
                return;
            }
            event.preventDefault();
            console.log("REGISTERIMG SHORTCUTS 2", event)
            shortcutsMapping(event)
        };

        // Add event listener to the document
        console.log(color.bgRed.white(" Registering shortcuts "))
        document.addEventListener('keydown', handleKeyDown);
        console.log(color.bgGreen.black(" Shortcuts Registered "))

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return null;
}

export default Shortcuts
