import Application from '@/scenes/Application';
import './globals.css';

export const metadata = {
  title: 'Thirty',
  description: 'A Drink Composition Experiment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='/assets/images/favicon.png'
          sizes='any'
        />
      </head>
      ;
      <body>
        <Application>{children}</Application>
      </body>
    </html>
  );
}
