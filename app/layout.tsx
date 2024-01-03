import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>My App</title>
      <meta name="description" content="My App is a..."/>
    </head>
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
