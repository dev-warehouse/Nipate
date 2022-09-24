// Hook
import {useCallback, useState} from "react";
import {useNotification} from "@core/hooks";

const useLocalStorage = (key: string, initialValue: any) => useCallback(() => {

    const {alert} = useNotification()

    const readValue = useCallback(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            alert([{
                id: 'localStorage_get_error',
                type: 'toast',
                props: {
                    message: 'Passing from Localstorage failed',
                    status: 'error'
                }
            }])
            console.log(error);
            return initialValue;
        }
    }, [key, initialValue])

    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(readValue);
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: any) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            alert([{
                id: 'localStorage_post_error',
                type: 'toast',
                props: {
                    message: 'Setting value to Localstorage failed',
                    status: 'error'
                }
            }])
            console.log(error);
        }
    };
    return [storedValue, setValue];
}, [key, initialValue])