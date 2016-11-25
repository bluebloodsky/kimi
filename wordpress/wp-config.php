<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gimilkyg_web');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'matrix');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ':&GCzbX+clerv[)RZo[2zM7hT06-!:9-/QGu/=GF=@MS>;+km3?@+Xw<x%8=HR.-');
define('SECURE_AUTH_KEY',  '*iVb}EXP6(4IGDu k]bK/!56cnb8F@de[`7s(X|Q XJ5qP}b1A*=#Fb?/Yma(CX:');
define('LOGGED_IN_KEY',    '#>jQ),YqnJMIoj4J:{1A.4Xaq;B 4`J1C3.IV8>p+WJ(c}B#suPK45csquVZvW+/');
define('NONCE_KEY',        '-B.pL_p`e;QSlQ%,WH&!-P<QC8w(AXHpr qt9`nzy%j4LpGX4sbVE4/NvLEHn5[C');
define('AUTH_SALT',        'IAGR9Y9G)E!H~vX>*9$dBceI]-nd!+%+be=A,mt,p30?~^G@va%^;30F#^1P~BOf');
define('SECURE_AUTH_SALT', ' ~BwJ+MEYQ^93N7Z^=ZNJk15V-50H$t>x/FHrgd!E{JXr]Ws)^xBlmaRVt6H`HrV');
define('LOGGED_IN_SALT',   'zm;]+4/WH:bFaK3Z$jpQ!JHy)Q:cM859_:huJ/E}=~!NmyoSIl3M/cp%rfpq:;M5');
define('NONCE_SALT',       'Rg%L<zEz3szZ3A7$8/^1Z4x~=MU4:K1OmIwb@qkMfcnBf)X_:,@O,sA-yy%q23Ws');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'gimi_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');