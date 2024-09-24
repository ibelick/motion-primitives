import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/components/core/disclosure';

export function DisclosureBasic() {
  return (
    <Disclosure className='w-[330px] rounded-md border border-zinc-200 px-3 dark:border-zinc-700'>
      <DisclosureTrigger>
        <button className='w-full py-2 text-left text-sm' type='button'>
          Show more
        </button>
      </DisclosureTrigger>
      <DisclosureContent>
        <div className='overflow-hidden pb-3'>
          <div className='pt-1 font-mono text-sm'>
            <p>
              This example demonstrates how you can use{' '}
              <strong className='font-bold'>Disclosure</strong> component.
            </p>
            <pre className='mt-2 rounded-md bg-zinc-100 p-2 text-xs dark:bg-zinc-950'>
              {`function DisclosureBasic() {\n  return (\n    <Disclosure>\n      <DisclosureTrigger>\n        <button type='button'>\n          Show more\n        </button>\n      </DisclosureTrigger>\n      <DisclosureContent>\n        <div>hey</div>\n      </DisclosureContent>\n    </Disclosure>\n  );`}
            </pre>
          </div>
        </div>
      </DisclosureContent>
    </Disclosure>
  );
}
