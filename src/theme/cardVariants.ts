export const cardVariants = {
  defaults: {
    // We can define defaults for the variant here.
    // This will be applied after the defaults passed to createVariant and before the variant defined below.
  },
  regular: {
    padding: {
      phone: 's',
      tablet: 'm',
    },
  },
  elevated: {
    padding: {
      phone: 's',
      tablet: 'm',
    },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 15,
    elevation: 5,
  },
};
