const social = {
  github: {
    username: 'dmed256',
    link: 'https://github.com/dmed256',
    color: '#1b1f23',
  },
  twitter: {
    username: 'dmed256',
    link: 'https://twitter.com/dmed256',
    color: '#34a1f2',
  },
  linkedin: {
    link: 'https://linkedin.com/in/dmed256',
    color: '#2478b5',
  },
  getEmail: () => {
    const [p1, p2, p3] = ['dmed256', 'gmail', 'com'];
    return `${p1}@${p2}.${p3}`;
  },
};

export default social;
