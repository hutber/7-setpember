import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ButtonLink, ExternalButtonLink } from '@mono-nx-test-with-nextjs/ui';

const useStyles = makeStyles(({ palette, breakpoints }: Theme) =>
  createStyles({
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      [breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
      backgroundColor: palette.primary.main,
      minHeight: '75px',
      flexWrap: 'wrap',
    },
    button: {
      margin: '10px',
      minWidth: '140px',
    },
  })
);

const footerElems = [
  {
    href: '/instructions',
    text: 'Instructions',
    external: false,
  },
  {
    href: '/assets/design/fe_movies_tech_test.pdf',
    text: 'Design',
    external: true,
  },
  {
    href: 'http://localhost:3333/swagger-doc',
    text: 'Swagger',
    external: true,
  },
  {
    href: 'http://localhost:4400/',
    text: 'Storybook',
    external: true,
  },
];

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {footerElems.map(({ href, text, external }) => {
        const Component = external ? ExternalButtonLink : ButtonLink;
        return (
          <Component
            key={text}
            href={href}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            {text}
          </Component>
        );
      })}
    </footer>
  );
};

export default Footer;
