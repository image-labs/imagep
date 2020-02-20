
function isDev() {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};

function isTouch() {
  return 'ontouchstart' in window;
};

export default {
  isDev: isDev(),
  isTouch: isTouch(),
};