import React from 'react'

export default function Footer(props) {
  return (
    <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class={`col-md-4 mb-0 text-${props.mode ==='dark'?'white':'black'}`}>© 2022 Company, Inc</p>

                {/* <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                </a> */}

                <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="/" class={`nav-link px-2 text-${props.mode ==='dark'?'white':'black'}`}>Home</a></li>
                <li class="nav-item"><a href="/" class={`nav-link px-2 text-${props.mode ==='dark'?'white':'black'}`}>Features</a></li>
                <li class="nav-item"><a href="/" class={`nav-link px-2 text-${props.mode ==='dark'?'white':'black'}`}>Pricing</a></li>
                <li class="nav-item"><a href="/" class={`nav-link px-2 text-${props.mode ==='dark'?'white':'black'}`}>FAQs</a></li>
                <li class="nav-item"><a href="/" class={`nav-link px-2 text-${props.mode ==='dark'?'white':'black'}`}>About</a></li>
                </ul>
            </footer>
    </div>
  )
}
