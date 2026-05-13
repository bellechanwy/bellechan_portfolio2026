/* Tailwind CDN config — shared across all pages.
 * Maps Clay-design semantic tokens to Tailwind utilities.
 * Never use Tailwind's default color palette (bg-blue-600, text-gray-500, etc.).
 * Always use the mapped names below.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        card: 'var(--bg-card)',
        'card-strong': 'var(--bg-card-strong)',
        dark: 'var(--bg-dark)',

        primary: {
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary-base)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          light: 'var(--secondary-light)',
          DEFAULT: 'var(--secondary-base)',
          dark: 'var(--secondary-dark)',
        },

        pink: 'var(--accent-pink)',
        teal: 'var(--accent-teal)',
        lavender: 'var(--accent-lavender)',
        peach: 'var(--accent-peach)',
        ochre: 'var(--accent-ochre)',
        mint: 'var(--accent-mint)',
        coral: 'var(--accent-coral)',

        ink: 'var(--text-primary)',
        body: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        'muted-soft': 'var(--text-muted-soft)',
        inverse: 'var(--text-inverse)',

        error: {
          light: 'var(--error-light)',
          DEFAULT: 'var(--error-base)',
          dark: 'var(--error-dark)',
        },
        success: {
          light: 'var(--success-light)',
          DEFAULT: 'var(--success-base)',
          dark: 'var(--success-dark)',
        },
        warning: {
          light: 'var(--warning-light)',
          DEFAULT: 'var(--warning-base)',
          dark: 'var(--warning-dark)',
        },
        info: {
          light: 'var(--info-light)',
          DEFAULT: 'var(--info-base)',
          dark: 'var(--info-dark)',
        },
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        'muted-soft': 'var(--text-muted-soft)',
        inverse: 'var(--text-inverse)',
        link: 'var(--text-link)',
      },
      backgroundColor: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        card: 'var(--bg-card)',
        'card-strong': 'var(--bg-card-strong)',
        dark: 'var(--bg-dark)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        soft: 'var(--border-soft)',
        strong: 'var(--border-strong)',
        ink: 'var(--text-primary)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
        full: 'var(--radius-full)',
      },
      spacing: {
        xxs: 'var(--space-xxs)',
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        xxl: 'var(--space-xxl)',
        section: 'var(--space-section)',
      },
      fontFamily: {
        base: 'var(--font-family-base)',
        display: 'var(--font-family-display)',
        secondary: 'var(--font-family-secondary)',
        mono: 'var(--font-family-mono)',
      },
      fontSize: {
        'display-xl': ['var(--font-size-display-xl)', { lineHeight: '1', letterSpacing: 'var(--tracking-display-xl)', fontWeight: '500' }],
        'display-lg': ['var(--font-size-display-lg)', { lineHeight: '1.05', letterSpacing: 'var(--tracking-display-lg)', fontWeight: '500' }],
        'display-md': ['var(--font-size-display-md)', { lineHeight: '1.1', letterSpacing: 'var(--tracking-display-md)', fontWeight: '500' }],
        'display-sm': ['var(--font-size-display-sm)', { lineHeight: '1.15', letterSpacing: 'var(--tracking-display-sm)', fontWeight: '500' }],
        'title-lg': ['var(--font-size-title-lg)', { lineHeight: '1.3', letterSpacing: 'var(--tracking-title-lg)', fontWeight: '600' }],
        'title-md': ['var(--font-size-title-md)', { lineHeight: '1.4', fontWeight: '600' }],
        'title-sm': ['var(--font-size-title-sm)', { lineHeight: '1.4', fontWeight: '600' }],
        'body-md': ['var(--font-size-body-md)', { lineHeight: '1.55', fontWeight: '400' }],
        'body-sm': ['var(--font-size-body-sm)', { lineHeight: '1.55', fontWeight: '400' }],
        caption: ['var(--font-size-caption)', { lineHeight: '1.4', fontWeight: '500' }],
        'caption-uppercase': ['var(--font-size-caption-uppercase)', { lineHeight: '1.4', letterSpacing: 'var(--tracking-uppercase)', fontWeight: '600' }],
        button: ['var(--font-size-button)', { lineHeight: '1', fontWeight: '600' }],
      },
      maxWidth: {
        content: '1280px',
        prose: '68ch',
      },
    },
  },
};
