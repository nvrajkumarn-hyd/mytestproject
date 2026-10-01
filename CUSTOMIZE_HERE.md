# Giftora — Easy Customization Guide

You do not need to understand the whole project to make common changes.

## 1. Change business name and contact details
Open:

`lib/config.ts`

Change the brand name, tagline, phone, WhatsApp, email, address and default city.

## 2. Change products and prices
Open:

`data/products.ts`

Each product contains its name, category, price, old price, image, personalisation setting, delivery types, recipients and occasions.

## 3. Change main categories
Open:

`data/categories.ts`

## 4. Change occasions
Open:

`data/occasions.ts`

## 5. Change homepage campaigns
Open:

`data/campaigns.ts`

## 6. Change offers and coupon codes
Open:

`data/offers.ts`

## 7. Change FAQ content
Open:

`data/faqs.ts`

## 8. Change homepage layout/content
Open:

`app/page.tsx`

## 9. Change colors
Open:

`tailwind.config.ts`

The current premium palette uses deep berry, warm rose, gold, cream, blush and charcoal.

## 10. Replace demo images
Images currently use remote Unsplash placeholders. For production, put your own images under `public/images/` and update the product/campaign data.

## Backend reminder
This first version uses browser/local mock state for cart and wishlist and mock UI for accounts/orders/admin. Real orders, inventory, payments, customer authentication, delivery zones and uploaded personalisation files should be connected to Supabase/PostgreSQL or your chosen backend before commercial launch.
