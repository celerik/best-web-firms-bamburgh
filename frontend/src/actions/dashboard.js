// @scripts
import urls from '../config/urls';

export const getDashboardContent = () =>
  new Promise((resolve, reject) => {
    fetch(urls.dashboard)
      .then(response => {
        const { content } = response.json();
        resolve(content);
      })
      .catch(error => reject(error));
  });
