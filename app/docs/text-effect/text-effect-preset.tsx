import { TextEffect } from '@/components/core/text-effect';

export function TextEffectWithPreset() {
  return (
    <TextEffect per='word' as='h3' preset='slide'>
      Animate your ideas with motion-primitives
    </TextEffect>
  );
}
