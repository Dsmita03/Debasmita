import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
    styles: {
      global: {
        'input::placeholder': {
          color: '#28969c', // Your placeholder color
        },
        'textarea::placeholder': {
          color: '#28969c', // Your placeholder color
        },
      },
    },
  });