import React, { memo } from 'react';
function Footer() {
  return (
    <div className="text-white py-8 text-xs relative flex text-center">
      <p className="absolute left-52">Copyright © 2022 |CodeYogi</p>
      <p className="absolute right-52">Powered By CodeYogi</p>
    </div>
  );
}

export default memo(Footer);