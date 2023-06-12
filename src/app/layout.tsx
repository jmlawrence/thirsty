import Application from '@/scenes/Application';
import './globals.scss';

export const metadata = {
  title: 'Thirtsy',
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
      <body>
        <Application>{children}</Application>
      </body>
    </html>
  );
}
