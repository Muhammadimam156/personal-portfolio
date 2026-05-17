import './globals.css';

export const metadata = {
  title: 'Frontend Developer & Startup Website Specialist',
  description: 'Premium portfolio of a modern web developer specializing in React, Next.js, and startup websites',
  keywords: 'frontend developer, web developer, React, Next.js, startup websites, SaaS',
  author: 'Frontend Developer',
  openGraph: {
    type: 'website',
    url: 'https://yourportfolio.com',
    title: 'Frontend Developer & Startup Website Specialist',
    description: 'Premium portfolio showcasing modern web development and startup website expertise',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
