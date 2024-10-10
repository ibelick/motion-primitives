'use client';
import Tabs from '@/components/core/tabs';
function TabsHorizontal() {
  return (
    <Tabs defaultTab='tab1' className='mx-10 flex h-[200px] items-center gap-4'>
      <Tabs.List className='flex-col'>
        <Tabs.Trigger tabId='tab1'>Proteins</Tabs.Trigger>
        <Tabs.Trigger tabId='tab2'>Carbohydrates</Tabs.Trigger>
        <Tabs.Trigger tabId='tab3'>Fats</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content tabId='tab1'>
        Proteins are essential nutrients for the human body. They are one of the
        building blocks of body tissue and can also serve as a fuel source.
        Protein is important for muscle growth, repair, and maintenance. It also
        plays a critical role in enzyme and hormone production.
      </Tabs.Content>

      <Tabs.Content tabId='tab2'>
        Carbohydrates are the body's main source of energy. They are essential
        for the brain, kidneys, heart muscles, and central nervous system. Carbs
        can be found in a variety of foods, including fruits, vegetables, bread,
        pasta, and dairy products.
      </Tabs.Content>

      <Tabs.Content tabId='tab3'>
        Fats are essential for absorbing vitamins and providing energy. They
        help build cell membranes and the protective sheaths surrounding nerves.
        Fats also play a role in muscle movement and blood clotting.
      </Tabs.Content>
    </Tabs>
  );
}

export default TabsHorizontal;
