var $node = $node || {} ; $node[ "/my/portfolio/logo.jpg" ] = "data:image/jpeg;base64,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"