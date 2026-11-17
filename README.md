# Kith & Leaf — Admin Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/kith-leaf-admin-dashboard/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Standalone responsive frontend reconstruction based on the uploaded 6.2-second screen recording (720 × 1280, 30 fps).

## Run
1. Extract `kith-leaf-admin-dashboard.zip`.
2. Open `index.html` in Chrome, Safari or Firefox.
3. No npm install, build step or external API key is required.

Optional local server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Video screens reproduced

### Dashboard
The video shows a dark store admin dashboard for **Kith & Leaf**, with a left navigation containing Dashboard, Orders, Products, Analytics, Customers, Finances, Invoices, Discounts, Chats, Email, Apps and Settings. The signed-in profile is Noor Haddad.

Visible dashboard cards:
- Today so far — animated sales value; sample final value $244.
- Last 7 days — $6,413.
- Orders today — 6.
- Sales studio line chart with Last year, 12M, 6M, 30D and 7D selectors.
- November goal — 1% of $24k; 29 days to go.
- Live store — 38 visitors, carts open, conversion rate, top page and checkout health.
- Packing queue — paid orders waiting to be packed.
- Running low — stock reorder reminders.
- Where sales come from — Web store, Instagram, Market stall and Wholesale.

### Orders
The Orders screen has tabs:
- All orders
- Packing board
- Returns

Controls shown include order/customer/product search, channel and date filters, and status chips for All, Open, Awaiting payment, To pack, Shipped, Delivered and Returned.

The Packing board uses four lanes:
1. To pack — Paid, waiting for hands
2. Packed — Board, label printed
3. Shipped — With the carrier
4. Delivered — Since yesterday

Order cards show order number, customer, item list, amount and channel. The demo supports drag-and-drop between lanes and quick next-stage movement using the arrow button.

## Visible original code transcription

The video’s source preview is titled `src/pages/orders.tsx`. The visible `moveH` pointer-move handler is transcribed in `src/pages/orders.tsx`:

```tsx
const moveH = (ev: PointerEvent) => {
  const dx = ev.clientX - x0, dy = ev.clientY - y0;
  if (!on) {
    if (Math.hypot(dx, dy) < 6) return;
    on = true;
    ghost = card.cloneNode(true) as HTMLElement;
    ghost.classList.add('ocard--ghost');
    gsap.fromTo(ghost, { scale: 1, rotation: 0 },
      { scale: 1.04, rotation: -2, duration: 0.25, ease: 'back.out(2)' });
  }
  gsap.set(ghost, { x: dx, y: dy });
  const under = document.elementFromPoint(ev.clientX, ev.clientY)
    ?.closest<HTMLElement>('.lane');
  const id = (under?.dataset.col as OrderStatus) ?? null;
  if (id !== over) { over = id; setHot(id); }
};
```

This is the visible source snippet only. The video does not show the declarations for `x0`, `y0`, `on`, `ghost`, `card`, `over`, `OrderStatus`, or `setHot`, nor the matching pointer-down / pointer-up code. Those missing source definitions are not invented in the transcription.

## Implemented interactions
- Responsive left navigation across all visible sections.
- Dashboard sales chart range controls.
- Create order modal; new orders appear in the queue and orders list.
- Orders search, channel filter and status filtering.
- All orders, Packing board and Returns tabs.
- Four-column packing Kanban board with drag-and-drop order status changes.
- Quick move order to next stage.
- CSV export for orders and finance records.
- Products search, low-stock filters, add product and restock.
- Customer search and add customer.
- Finance, invoice, discount, chat and email demo views.
- November goal editor, notes dialog and store settings.
- Dark / light theme toggle.
- Cmd/Ctrl + K focuses sidebar search.

## Files
- `index.html` — page structure and all dashboard views.
- `styles.css` — dark blue admin theme, responsive layout, charts, order cards and board.
- `app.js` — sample data, navigation, filtering and demo interactions.
- `src/pages/orders.tsx` — visible source code transcription.
- `README.md` — setup, screen notes and source limitations.

## Accuracy and limitations
This is a frontend reconstruction from the visible screen recording, not the original Kith & Leaf repository. Only the visible `moveH` TypeScript fragment is transcribed from the code preview. The rest of the UI is rebuilt from the video. Figures and customer/order records are sample demo data. There is no live Shopify/store API, payment processor, inventory service, shipping integration, authentication or persistent database. All actions are local browser simulations.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
