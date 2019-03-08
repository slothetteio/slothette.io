import { withRouter } from 'react-router-dom';

import withController from './controller';

import UriEncodeDecodeWidget from "../../../widgets/uri-encode-decode";




let EnhancedUriEncodeDecodeWidget = withRouter(
  withController(UriEncodeDecodeWidget),
);

export default EnhancedUriEncodeDecodeWidget;
