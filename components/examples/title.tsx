import { Yeseva_One } from 'next/font/google';

const yeseva = Yeseva_One({
  weight: '400',
  subsets: ['latin'],
});

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return <h1 className={`${yeseva.className} text-3xl`}>{content}</h1>;
};

export default Title;
