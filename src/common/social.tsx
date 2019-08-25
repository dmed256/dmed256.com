const social = {
  github: {
    username: 'dmed256',
    link: 'https://github.com/dmed256',
  },
  twitter: {
    username: 'dmed256',
    link: 'https://twitter.com/dmed256',
  },
  linkedin: {
    link: 'https://linkedin.com/in/dmed256',
  },
  getEmail: () => {
    const [p1, p2, p3] = ['dmed256', 'gmail', 'com'];
    return `${p1}@${p2}.${p3}`;
  },
};

export default social;
