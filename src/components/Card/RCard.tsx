import {createVariant, createRestyleComponent, VariantProps} from '@shopify/restyle'
import theme, { ReStyleTheme } from '../../theme';
export const variant = createVariant<ReStyleTheme>({themeKey: 'cardVariants', defaults: {
  margin: {
    phone: 's',
    tablet: 'm',
  },
  backgroundColor: 'cardRegularBackground',
}})

const Card = createRestyleComponent<VariantProps<ReStyleTheme, 'cardVariants'>, ReStyleTheme>([variant])

<Card variant="elevated" />