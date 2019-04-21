module.exports = {
  // Test page with client side rendering
  '/': {
    id: 'merchant',
    layout: 'merchant',
    type: 'public',
    containers: [
      {
        id: '',
        class: 'sb-merchant__left-container',
        blocks: [
          {
            id: '',
            type: 'merchant-intro-badge',
            priorityLevel: 'critical',
            priority: 1,
          },
          {
            id: '',
            type: 'merchant-cashback-terms',
            priorityLevel: 'critical',
            priority: 2,
          },
          {
            id: '',
            type: 'merchant-comments',
            priorityLevel: 'critical',
            priority: 3,
          },
          {
            id: '',
            type: 'merchant-trending-stores',
            priorityLevel: 'critical',
            priority: 4,
            numOfItems: 5,
          },
        ],
      },
      {
        id: '',
        class: 'sb-merchant__right-container',
        blocks: [
          {
            id: '',
            type: 'merchant-banner',
            priorityLevel: 'critical',
            priority: 1,
          },
          {
            id: '',
            type: 'merchant-coupon-and-promotions',
            priorityLevel: 'critical',
            priority: 1,
          },
          {
            id: '',
            type: 'merchant-summary',
            priorityLevel: 'critical',
            priority: 1,
          },
        ],
      },
    ]
  },
  // Test page with server side rendering
  '/ssr': {
    id: 'merchant',
    layout: 'merchant',
    type: 'public',
    
  },
  // Test page with both server side and client side rendering
  '/mix': {
    id: 'merchant',
    layout: 'merchant',
    type: 'public',
    
  },
  '/content': {
    id: 'content',
    layout: 'content',
    type: 'public'
  },
  '/me': {
    id: 'me',
    layout: 'profile',
    type: 'customer'
  },
  '/login': {
    id: 'login',
    layout: 'login',
    type: 'public'
  },
  '/content-tw': {
    id: 'content',
    layout: 'content',
    type: 'country-specific',
    country: 'TW',
  },
}