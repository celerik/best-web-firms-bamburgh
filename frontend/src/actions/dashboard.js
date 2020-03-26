// @scripts
import urls from '../config/urls';

export const getDashboardContent = () =>
  new Promise((resolve, reject) => {
    fetch(urls.dashboard)
      .then(response => response.json())
      .then(({ content }) => resolve(content))
      .catch(error => reject(error));
  });
