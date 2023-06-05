import Icon from './Icon.tsx'

export default function Footer() {
  const navigation = [
    { name: '깃허브', href: 'https://github.com/dungsil/dun.land', icon: 'simple-icons:github' },
  ];

  return (
    <footer class='bg-zinc-950'>
      <div class='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div class='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} target='_blank' class='text-gray-400 hover:text-gray-500'>
              <span class='sr-only'>{item.name}</span>
              <Icon icon={item.icon} size={6} />
            </a>
          ))}
        </div>
        <div class='mt-8 md:order-1 md:mt-0'>
          <p class='text-center text-xs leading-5 text-gray-500'>
            &copy; {new Date().getFullYear()} DUN LAND
          </p>
        </div>
      </div>
    </footer>
  );
}
