import React from 'react'
import Link from 'react-router-dom'
import pageConfigs from '../utils/pageConfigs'

function Header() {
  return (
    <header>
        <nav>
          <Link>
            This is where the logo goes
          </Link>
          <button>
            This is where the menu goes
          </button>
          <Link>
            This is where the link to the home page goes
          </Link>
          <Link>
            This is where the link to the about page goes
          </Link>
          <Link>
            This is where the link to the menu page goes
          </Link>
          <Link>
            This is where the link to the reservations page goes
          </Link>
          <Link>
            This is where the link to the contact page goes
          </Link>
        </nav>
    </header>
  )
}

export default Header