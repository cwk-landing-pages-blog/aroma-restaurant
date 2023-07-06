import qs from 'qs';

export const qsAllPage = qs.stringify(
  {
    populate: {
      name: true,
      description: true,
      open_hours: true,
      we_offer_title: true,
      we_offer_items: {
        populate: ['img'],
      },
      our_story_title: {
        populate: ['section_img'],
      },
      our_strength: {
        populate: ['section_img'],
      },
      services_title: {
        populate: ['section_img'],
      },
      special_section: {
        populate: ['section_img'],
      },
      services_items: {
        populate: ['img'],
      },
      menu_title: true,
      menu_items: {
        populate: ['price', 'img'],
        filters: {
          isAvailable: {
            $eq: true,
          },
          showOnCard: {
            $eq: true,
          },
        },
      },
      social_networks: true,
      google_map_location: true,
      contacts: true,
      heros: {
        populate: ['img', 'section'],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);
export const qsMenuPage = qs.stringify(
  {
    populate: {
      menu_title: true,
      menu_items: {
        populate: ['price', 'img'],
        filters: {
          isAvailable: {
            $eq: true,
          },
        },
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);
export const qsLinksPage = qs.stringify(
  {
    populate: {
      menu_items: {
        populate: ['img'],
        filters: {
          showOnLinkTree: {
            $eq: true,
          },
        },
      },
      social_networks: true,
      special_section: {
        populate: ['section_img'],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);
