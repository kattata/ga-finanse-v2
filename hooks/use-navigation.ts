import { useTranslations } from "next-intl";

type NavItem = {
    label: string;
    url: string;
}

export function useNavigation() {
      const t = useTranslations("Global.Header.Navigation");
    
    const navigation: NavItem[] = [
        {
            label: t('Home'),
            url: '/'
        },
        {
            label: t('Services'),
            url: '/uslugi'
        },
        {
            label: t('About'),
            url: '/o-firmie'
        },
        {
            label: t('Contact'),
            url: '/kontakt'
        },
    ]

    return navigation;
}