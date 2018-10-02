::: resume

:::: resume-section title: 'About'

**I really enjoy programming**.
From high performance computing applications running on thousands of hybrid architecture nodes,
to building web apps with great user experiences.

I'm lucky to be in an interesting combination working in the finance industry at [Two Sigma](https://www.twosigma.com/) and being a contractor with an [exascale initiative](http://ceed.exascaleproject.org).

The influx of projects seen from both domains along with personal sideprojects require me to work with a high variety of technologies, frameworks, libraries, and languages.

::::

:::: resume-section title: 'Work Experience'

::::: resume-subsection {
  title: 'Software Engineer',
  start: 'August 2015',
  end: 'Present',
  location: 'Two Sigma',
}

???

:::::

::::: resume-subsection {
  title: 'Contractor',
  start: 'December 2016',
  end: 'Present',
  location: 'Lawrence Livermore National Laboratory',
}

- Core developer of [OCCA](https://libocca.org)
- Implemented an OCCA-backed solution in [MFEM](http://mfem.org), providing a **GPU** solution
- Developed **GPU**-enabled methods for high-order finite element implementations

:::::

::::: resume-subsection {
  title: 'Intern',
  date: 'Summer 2014',
  location: 'Shell',
}

Optimized finite difference codes on **CPU** and **GPU** architectures.
Additionally, investigated hybrid kernels that would achieve portable performance across varying architectures.

:::::

::::: resume-subsection {
  title: 'Contractor',
  start: 'Spring 2014',
  end: 'Fall 2014',
  location: 'Shell',
}

Implemented numerical methods for parallel architectures through **OpenMP**, **OpenCL**, and **CUDA**.

:::::

::::: resume-subsection {
  title: 'Intern',
  date: 'Summer 2013',
  location: 'Shell',
}

Worked on Discontinuous Galerkin implementations for wave equations.
Begin work on a portability layer to enable **OpenMP**, **OpenCL**, and **CUDA**.

:::::

::::

:::: resume-section title: 'Education'

::::: resume-subsection {
  title: 'Ph.D. in Computational and Applied Mathematics',
  date: 'May 2015',
  location: 'Rice University',
}

:::::

::::: resume-subsection {
  title: 'Masters in Computational and Applied Mathematics',
  date: 'April 2014',
  location: 'Rice University',
}

:::::

::::: resume-subsection {
  title: 'Bachelor of Science in Mathematics',
  date: 'May 2011',
  location: 'University of Texas Pan-American',
}

Double major in Computer Science

:::::

::::

:::: resume-section title: 'Open-Source Projects'

::::: resume-subsection {
  title: 'OCCA',
    link: 'https://libocca.org',
}

- C++ library that enables JIT compilation for parallel architecture kernels (_CPU_, _GPU_, _FPGA_)
- Unified API to program heterogeneous architectures
- A C parser for the [OKL](https://libocca.org/#/guide/okl/introduction) language, introducing `@attributes` for ast-manipuation
- [OKL](https://libocca.org/#/guide/okl/introduction) was designed to expose enough parallelism to directly convert kernels into _OpenMP_, _CUDA_, _OpenCL_, or _HIP_

:::::

::::: resume-subsection {
  title: 'occa.py',
  link: 'https://nbviewer.jupyter.org/github/libocca/occa.py/blob/master/notebooks/Tutorial.ipynb',
}

A Cython-based package, integrating **numpy** objects with **OCCA** to provide JIT compiation for parallel architecture kernels (_CPU_, _GPU_, _FPGA_)

:::::

::::: resume-subsection {
  title: 'Murky',
  link: 'https://github.com/dmed256/murky',
}

Inspired by [docsify](https://docsify.js.org), a small web application written in Typescript and React to quickly build an extensible markdown-based blog.

It provides:

- Plugin-system to extend Markdown using [markdown-it](https://github.com/markdown-it/markdown-it)
- Uses JSON5 to directly map properties from Markdown to their respective React components
- Short hash routing to map paths to staticly-hosted Markdown files

:::::

::::

:::: resume-section title: 'Publications'

::::: resume-subsection {
  title: 'A model evaluation study for treatment planning of laser-induced thermal therapy',
  date: 'October 2015',
}

:::::: resume-publication {
  me: 'Medina, D.',
  authors: 'Fahrenholtz, S. J., Moon, T., Franco, M., Medina, D., Danish, S., \
  Gowda, A., Shetty, A., Maier, F., Hazle, J., Stafford, R. J., Warburton, T. and Fuentes, D',
} ::::::

:::::

::::: resume-subsection {
  title: 'Portability and performance of nuclear reactor simulations on many-core architectures',
  date: 'May 2015',
}

:::::: resume-publication {
  me: 'Medina, D.',
  authors: 'Rahaman, R., Medina, D., Lund, A., Tramm, J., Warburton, T. and Seigel, A.',
} ::::::

:::::

::::: resume-subsection {
  title: 'GPU accelerated discontinuous Galerkin methods for shallow water equations',
  date: 'May 2015',
}

:::::: resume-publication {
  me: 'Medina, D.',
  authors: 'Gandham, R., Medina, D. and Warburton, T.',
} ::::::

:::::

::::: resume-subsection {
  title: 'High-Order Finite-differences on multi-threaded architectures using OCCA',
  date: 'October 2014',
}

:::::: resume-publication {
  me: 'Medina, D. S.',
  authors: 'Medina, D. S., St-Cyr, A. and Warburton T.',
} ::::::

:::::

::::: resume-subsection {
  title: 'OCCA: A united approach to multi-threading languages',
  date: 'February 2014',
}

:::::: resume-publication {
  me: 'Medina, D. S.',
  authors: 'Medina, D. S., St-Cyr, A. and Warburton T.',
} ::::::

:::::

::::

:::
