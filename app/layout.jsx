"use client"
import { useEffect } from 'react';
import "./globals.css";
import { Suspense } from "react";
import { FacebookPixelEvents } from '@/components/pixel-events';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';
export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
            <script
            src="https://checkout.revolut.com/checkout.js" // Assurez-vous que ce lien est correct
            async
          />
                <script src="//app.quickreviewer.com/proof/webproof/qrv2.js" defer></script>
                <link rel='icon' type='image/png' href='../favicon.ico' />
            </head>
            <body>
                {children}
                <ToastContainer />
                {/* Suspense est utilisé pour charger Facebook Pixel sans bloquer le rendu */}
                <Suspense fallback={null}>
                    <FacebookPixelEvents />
                </Suspense>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_PIXEL_ID} />
            </body>
        </html>
    );
}