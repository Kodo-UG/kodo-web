import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Link
							to="/"
							style={{
                marginBottom: 4
              }}
              
						>
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kodo%20Schools%20Logo-20%201-m9kSeX93hpeGI06AhwmlhwK4gwv3sw.png"
								alt="Kodo"
                width={80}
                height={24}
                style={{
                  width: 'auto'
                }}
							/>
						</Link>
        </div>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer