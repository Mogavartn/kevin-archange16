"use client"
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
                <script src="//app.quickreviewer.com/proof/webproof/qrv2.js" defer></script>
                <link rel='icon' type='image/png' href='../favicon.ico' />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}