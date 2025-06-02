export interface RouteInfo {
  path: string;             // Angular route path
  title: string;            // Display title
  icon?: string;            // Optional icon name (e.g., from Material or FontAwesome)
  class?: string;           // Optional CSS class
  children?: RouteInfo[];   // Optional nested routes (for dropdowns/expandables)
  layout?: string;          // Optional layout or parent route group
  hidden?: boolean;         // Optional flag to hide from sidebar/menu
}