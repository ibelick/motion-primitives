import Link from 'next/link';
import { Yeseva_One } from 'next/font/google';

const yeseva = Yeseva_One({
  weight: '400',
  subsets: ['latin'],
});

type LinkType = {
  content: string;
  link: string;
};

const LinkExemple = ({ content, link }: LinkType) => {
  return (
    <Link className={`${yeseva.className} text-3xl`} href={link}>
      {content}
    </Link>
  );
};

export default LinkExemple;
