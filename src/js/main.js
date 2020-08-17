var reportsWidget = {
    options: {
        containerSelector: '.reports',
        paginationSelector: '#pagination-container',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                            '<a href="{{url}}" target="_blank">{{title}} <span>({{file_size}} {{file_type}})</span></a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);        
    },
    renderReports: function(reports) {
        var inst = this,
            options = inst.options;
        $(options.paginationSelector).pagination({
          dataSource: reports,
          pageSize: 9,
          callback: function(data, pagination) {
            var html = Mustache.render(options.template, data);
            $(options.containerSelector).html(html);
          }
        })
    }
};

reportsWidget.init();