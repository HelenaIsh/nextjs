import dynamic from 'next/dynamic';

const DynamicSelectComponent = dynamic(() => import('../components/MySelect'), { ssr: false });

export default function Home() {
  return (
      <>
          <DynamicSelectComponent />
      </>

  );
}
