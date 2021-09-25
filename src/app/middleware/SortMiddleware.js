function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };

    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            col: req.query.col,
            type: req.query.type,
        });
    }

    next();
}

module.exports = SortMiddleware;
