# notifications
```jsx

import { useNotifications } from '@cigna/amp-notifications';
/**
 * Publish a notification. if `dismissAfter` is set, the notification will be
 * auto dismissed after the given period.
 * @param {Object} notif - Object containing
 * @param {Object} notif.kind - Kinda of notification (success, warning, failure)
 * @param {Object} notif.message - Notification message
 * @param {Object} notif.dismissAfter - Time after which to dismiss notification (default time set in constants)
 */
function showInfo() {
	const { showError, showInfo } = useNotifications();
  showInfo({
        vertical: 'bottom',
        horizontal: 'center',
        message: 'Updated Timeline',
        dismissAfter: 3000
      });
 }
```
## Running unit tests

Run `nx test notifications` to execute the unit tests via [Jest](https://jestjs.io).
