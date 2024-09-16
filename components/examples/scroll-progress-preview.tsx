import { ScrollProgress } from '../core/scroll-progress';

const dummyContent = Array.from({ length: 10 }, (_, i) => (
  <p key={i} className='flex justify-center items-center p-4'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
    lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra
    nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget
    libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut
    porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies
    a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
));

export function ScrollProgressPreview() {
  return (
    <div className='m-4'>
      <ScrollProgress className='top-[65px]' />
      <strong className='font-bold flex items-center justify-center'>
        Note: The scroll progress is shown below the navbar of the page.
      </strong>
      {dummyContent}
    </div>
  );
}
