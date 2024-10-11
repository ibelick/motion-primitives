import { Spotlight } from '@/components/core/spotlight';

export function SpotlightBasic() {
  return (
    <Spotlight className="p-12 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Spotlight Magic</h2>
        <p className="text-xl text-pink-100">Move your cursor to unveil the hidden glow</p>
      </div>
    </Spotlight>
  );
}