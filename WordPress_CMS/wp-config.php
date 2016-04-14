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
define('DB_NAME', 'wordpress_UWV');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

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
define('AUTH_KEY',         'y3[01129-qu@dIx)Ch=ZK6=fc&-|0=]j!^`dWeX|#F7mTm-|:kIa]^77//LGPLlk');
define('SECURE_AUTH_KEY',  'BF6|1kAU2yl6Vb+I|J KvE)Q>h|fh(vGM.?UdcV0PQ;(^K<HiCUvU-k#Eyqlf[)s');
define('LOGGED_IN_KEY',    '%S f fseSwY*m<=<1^!=2g-k8e6|6D~F+=M~yn p7_H+ka#Q+a!%@rgc5~:CosTJ');
define('NONCE_KEY',        'xcQea:*a?H$b|4r:%-/M-C+$Yn8Bsi.0o{`hh=*l#cI+G&/]RU@o1:+MPvhPki-g');
define('AUTH_SALT',        'ME``M6zk<a)*#x(S~fPq1VGH6yF:dIb{+VWFV+W16>-+_!e.B/>&W|@eUGs|d%NX');
define('SECURE_AUTH_SALT', '4mP2QO>O8EbnFFF#|UTTj7M=:3+hfdVP/Av$u`ahoF5j!@mFzdc9z~C[Bpw?cTiW');
define('LOGGED_IN_SALT',   'I(&+Q?qq`_$#fqy5{n2E#~?,BP@A%1-Vj62zHVY,tHfU&Sg[z!5%Ka 1%m!C_-fm');
define('NONCE_SALT',       ')2?`VZO0?R-MV__Bur|k)!V+T_=[|3lNk O9L;Y0PoJhH0MzR$EQ:|#SoBrtlKH>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
