'use client';
import {useParams} from 'next/navigation';
import {Locale, useLocale, useTranslations} from 'next-intl';
import {ChangeEvent, ReactNode, useState, useTransition} from 'react';
import {usePathname, useRouter,} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

import './localeSwitcher.scss';
import  Image  from 'next/image';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
  };

export default function LocaleSwitcher() {
    const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname();
  const params = useParams();
   const t = useTranslations('LocaleSwitcher');
      const locale = useLocale();

      console.log(locale);

  function handleLocaleChange(event:{target:{value:Locale}}) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }
  const currentLFlag = locale === "en" ? "/flags/uk.webp" : "/flags/spain.webp";
  const currentLang = locale === "en" ? t('en') : t('es');
  const activeFlags = isOpen ? " active" : "";
  return(
      <nav className={`navswitcher fixed p-2 flex gap-2${activeFlags}`}>
        
        <div className="flag-container flex relative gap-2">
          <button className={`transition-all duration-500 currentlanguage`} onClick={() => setIsOpen(!isOpen)}  title={`${t('label')} ${currentLang}`} >
            <Image src={currentLFlag} alt={currentLang} width={30} height={30} />
          </button>

          <button 
            className={`flags transition-all duration-500 sp ${locale === "es" ? "grayscale" : "hover:brightness-[1.50]"}`} 
            disabled={locale === "es"}
            title={t('es')} 
            onClick={() =>{ handleLocaleChange({ target: { value: 'es' } }); setIsOpen(false) }}>
              <Image src="/flags/spain.webp" alt={t('es')} width={30} height={30} />
          </button>
          <button
            title={t('en')} 
            className={`flags transition-all duration-500 en ${locale === "en" ? "grayscale" : "hover:brightness-[1.50]"}`} 
            disabled={locale === "en"} 
            onClick={() =>{ handleLocaleChange({ target: { value: 'en' } }); setIsOpen(false)}}>
            <Image src="/flags/uk.webp" alt={t('en')} width={30} height={30} />
          </button>
        </div>

      </nav>
  );
}