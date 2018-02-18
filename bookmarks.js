// TODO: Validation for same bookmark
// TODO: Set up tags
// TODO: Set up import
// TODO: Set up http://api.screenshotlayer.com/api/capture
// TODO: Start toasting
// TODO: Wrap up modals in a function
/*
    new Modal({
        id: 'someHtmlId',
        data: {name: 'hey'}
        html: function(data) {
            return `${data['name']}`,
        },
        actionButtons: [
            button: {
                title: 'Cancel',
                mode: 'dismiss',
                action: function(_thisModal) {
                    // default handling of dissmiss type
                }
            },
            button: {
                title: 'Save',
                mode: 'call_action_and_dissmiss',
                action: function(_thisModal) {
                    // default handling of dissmiss type
                }
            }
        }]
    })
    Modal = function($options) {
        // set options
        modal = Object.assign({defaults here}, $options);
        modal.dismiss() {

        }

        return modal;
    }
*/

var BookmarksApi = {
    getBookmarkTags: function() {
        var holder = {};
        var bookmarks = this.getBookmarks();
        for (i = 0; i < bookmarks.length; i++) {
            var b = bookmarks[i];
            for (innerI = 0; innerI < b.tags.length; innerI++) {
                var t = b.tags[innerI];
                holder[t] = null;
            }
        }

        return Object.keys(holder);
    },
    getBookmarks: function() {
        var container = this.getStarageContainer();

        return container.bookmarks.map((b) => new Bookmark(b));
    },
    upsert: function(bookmark) {
        var container = this.getStarageContainer();

        var index = container.bookmarks.findIndex((b) => b.url === bookmark.originalUrl);
        bookmark.originalUrl = bookmark.url;
        if (index !== -1) {
            container.bookmarks[index] = bookmark;
        }
        else {
            container.bookmarks.push(bookmark);
        }

        this._save(container);
    },
    delete: function(bookmark) {
        var container = this.getStarageContainer()
        var index = container.bookmarks.findIndex((b) => b.url === bookmark.url);
        container.bookmarks.splice(index, 1);

        this._save(container);
    },
    setPageImageAsync: function(bookmark, callback) {
        // use service to get image
        // lock bookmark for changes - can't delete while updating
        // update container in callback
    },
    getStarageContainer: function() {
        var container = this._retrieve();
        if (container === null) {
            container = { bookmarks: [] };
        }
        return container;
    },
    // when I refactor this to its own class - _retreive: function(itemName, defaultObject);
    _retrieve: function() {
        var storedJson = localStorage.getItem('bookmarks');

        try {
            return JSON.parse(storedJson);
        } catch (error) {
            // garbage json - return default
            return null;
        }
    },
    _save: function(updatedContainer) {
        var storeJson = JSON.stringify(updatedContainer);

        localStorage.setItem('bookmarks', storeJson);
    },
    __tests: function() {
        localStorage.clear();

        var t1 = this.getBookmarks();
        console.log('Getting bookmarks from new state. Should see empty array.');
        console.log($.isArray(t1) && t1.length === 0);
        console.log(t1);

        this._save({ bookmarks: [new Bookmark()] });
        console.log('Saved new state with a bookmark using _save. Should have 1 bookmark.');
        console.log(this.getBookmarks().length === 1);
        console.log(this.getBookmarks());

        localStorage.clear();
        console.log('Cleared state');

        this.upsert(new Bookmark({}));
        console.log('Added a bookmark trhough upsert. Should have 1 bookmark.');
        console.log(this.getBookmarks().length === 1);
        console.log(this.getBookmarks());

        this.upsert(new Bookmark({ url: 'a.local' }));
        console.log('Added a bookmark with unique url trhough upsert. Should have 2 bookmark with the last one matching on url.');
        console.log(this.getBookmarks().length === 2 && this.getBookmarks()[this.getBookmarks().length -1].url === 'a.local');
        console.log(this.getBookmarks());

        this.upsert(new Bookmark({ url: 'a.local', title: 'a' }));
        console.log('Added a bookmark with same url trhough upsert. Should have 2 bookmarks with the last one matching on new bookmark.');
        console.log(
            this.getBookmarks().length === 2 
            && this.getBookmarks()[this.getBookmarks().length -1].url === 'a.local'
            && this.getBookmarks()[this.getBookmarks().length -1].title === 'a'
        );

        this.delete(new Bookmark({url: 'a.local'}));
        console.log('Deleted bookmark. Should have 1 bookmark. And the remaining shouldn\'t match the url');
        console.log(
            this.getBookmarks().length === 1
            && this.getBookmarks()[0].url === ''
        );

    }
};

var Bookmark = function(options) {
    options = options || {};
    var b = Object.assign(
        {
            url: '',
            originalUrl: '',
            summary: '',
            title: '',
            imageData: '',
            clicks: 0,
            dateAdded: 0,
            tags: []
        }, options
    );

    b.originalUrl = b.originalUrl || b.url;
    if (!$.isArray(b.tags))
        b.tags = [];

    b.urlValidationRegex = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

    b.validate = function() {
        var validationErrors = [];
        if (!b.url || !b.url.trim()) {
            validationErrors.push({key: 'url', message: 'Url field must be completed' });
        }
        else if (!b.urlValidationRegex.test(b.url)) {
            validationErrors.push({key: 'url', message: 'Must be in a valid URL format' })
        }
    
        return validationErrors;
    }

    return b;
};

var BookmarkViews = {
    mode: 'view',
    formModal: function(bookmark) {
        var isNew = !bookmark || !bookmark.originalUrl;
        bookmark = bookmark || new Bookmark();
        var bookmarkJson = JSON.stringify(bookmark);
        var tagsValue = bookmark ? bookmark.tags.join(', ') : '';
        var templateHtml = `
        <div id="add-bookmark-dialog" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${isNew ? 'Add' : 'Edit'} bookmark</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <form>
                    <fieldset>
                        <input type="hidden" name="originalUrl" value="${bookmark.originalUrl}" >
                        <div class="mb-3">
                            <label>URL</label>
                            <input class="form-control" autocomplete="off" type="text" name="url" value="${bookmark.url}" >
                        </div>
                        <div class="mb-3">
                            <label>Site name</label>
                            <input class="form-control" autocomplete="off" type="text" name="title" value="${bookmark.title}" >
                        </div>
                        <div class="mb-3">
                            <label>Summary</label>
                            <input class="form-control" autocomplete="off" type="text" name="summary" value="${bookmark.summary}" >
                        </div>
                        <div class="mb-3">
                            <label>Tags</label>
                            <input class="form-control" autocomplete="off" type="text" name="tags" value="${tagsValue}" >
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary bookmark-save">Save changes</button>
            </div>
            <div>
                <pre>
                    ${bookmarkJson}
                </pre>
            </div>
          </div>
        </div>
      </div>
        `;



        return templateHtml;

    },
    confirmModal: function(url) {
        var templateHtml = `
        <div id="add-bookmark-dialog" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete bookmark?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <p>Are you sure you want to delete the bookmark for ${url}?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary bookmark-delete-confirm">Yes, Delete it!</button>
            </div>
          </div>
        </div>
      </div>
        `;



        return templateHtml;
    },
    container: null,
    display: function($container, filter = null) {
        this.container = $container;
        this._styling();
        this._functionality();

        var bookmarks = BookmarksApi.getBookmarks();
        var filteredBookmarks = [];
        if (!filter) {
            filteredBookmarks = bookmarks;
        }
        else {
            filteredBookmarks = bookmarks.filter((b) => b.tags.find((t) => t === filter));
        }
        var bookmarkDisplayHtml = `
        <div>
            <a class="add-bookmark" href="#" style="padding: 8px; display: inline-block;"><span class="oi oi-plus" data-glyph="icon-plus" title="Add a bookmark" aria-hidden="true"></span></a>
            <a class="edit-bookmarks" href="#" style="padding: 8px; display: inline-block;"><span class="oi oi-pencil" data-glyph="icon-pencil" title="Edit mode" aria-hidden="true"></span></a>
        </div>
        `;

        var noBookmarkDisplay = `
        <div>
            <div class="jumbotron">
                <div class="container">
                    <h2>Add some bookmarks.</h2>
                    <a class="btn btn-primary btn-lg add-bookmark" href="#" role="button">Add one now!</a>
                </div>
            </div>
        </div>
        `;        

        if (bookmarks.length === 0) {
            bookmarkDisplayHtml += noBookmarkDisplay;
        } else {
            // todo: filtering here
            // var bookmarksFiltered = this._filter(bookmarks); < use current filter state property
            bookmarkDisplayHtml += this._getBookmarksDisplayHtml(filteredBookmarks, filter);
        }

        this.container.html('');
        this.container.append($(bookmarkDisplayHtml));
    },
    _getBookmarksDisplayHtml: function(bookmarks, filter) {
        // todo: get tags
        // todo: add tag filtering

        var bookmarkTags = BookmarksApi.getBookmarkTags();
        var filterClearTagHtml = filter ? this._getTagFilterClearDisplay() : '';
        var bookmarkSelectionHtml = bookmarkTags.map((t) => this._getTagDisplay(t, filter)).join('');
        var bookmarksHtml = bookmarks.map((b) => this._getBookmarkDisplay(b)).join('\n');

        var _this = this;
        

        return `
            <div>
                ${filterClearTagHtml}
                ${bookmarkSelectionHtml}
            </div>
            <div class="d-flex">
                ${bookmarksHtml}
            </div>
        `;
    },
    _getBookmarkDisplay: function(bookmark, activeFilter) {
        // TODO: flex this
        var tagsHtml = bookmark.tags.map((t) => this._getTagDisplay(t, activeFilter)).join('\n');

        var editButtonsHtml = `
                <div class="edit-buttons" class="position-absolute" style="top: 4px; right: 4px;">
                    <a class="delete-bookmark" href="#" style="padding: 8px; display: inline-block;"><span class="oi oi-delete" data-glyph="icon-plus" title="Remove bookmark" aria-hidden="true"></span></a>
                    <a class="edit-bookmark" href="#" style="padding: 8px; display: inline-block;"><span class="oi oi-pencil" data-glyph="icon-pencil" title="Edit bookmark" aria-hidden="true"></span></a>
                </div>
            `;

        return `
            <div class="bookmark-container d-inline-block w-25 p-3 m-3 border border-info" data-url="${bookmark.url}">
                ${editButtonsHtml}
                <div>
                    <a href="${bookmark.url}">${bookmark.title || bookmark.url}</a>
                    <p>${bookmark.summary || '&nbsp;'}</p>
                </div>
                <div>
                    ${tagsHtml}
                </div>
            </div>
        `;
    },
    _getTagDisplay: function(tagName, activeFilter) {
        var active = tagName === activeFilter ? "success" : "secondary";
        if (tagName === activeFilter) {

        }
        return `<a href="#" class="bookmark-tag"><span class="badge badge-pill badge-${active}">${tagName}</span></a>`;
    },
    _getTagFilterClearDisplay: function() {
        return `<a href="#" class="bookmark-tag-filter-clear"><span class="badge badge-pill badge-info">CLEAR</span></a>`;
    },
    _styling: function () {
        // run once - eventing is on body delegates
        if (this._styling_hasRun) {
            return;
        }
        this._styling_hasRun = true;
        $('head').append(`
            <style> 
                .edit-buttons { display: none; }
                .in-edit-mode .edit-buttons { display: block; }
                .in-edit-mode .edit-bookmarks { color: red; }
            </style>
        `);
    },
    _functionality: function() {
        // run once - eventing is on body delegates
        if (this._functionality_hasRun) {
            return;
        }
        this._functionality_hasRun = true;

        var _this = this;
        var $currentModal = null;
        // OPEN ADD MODAL
        $('body').on('click', '.add-bookmark', function() {
            $currentModal = $(_this.formModal());
            $('#templates').append($currentModal);

            $currentModal.modal('show');
        });
        // SAVE BOOKMARK
        $('body').on('click', '.bookmark-save', function() {
            $currentModal.find('.text-danger').remove();

            var bookmarkRaw = {}
            // html form to object
            $currentModal.find('form').serializeArray().forEach((nameValue) => {
                bookmarkRaw[nameValue.name] = nameValue.value;
            });

            if (bookmarkRaw.tags) {
                bookmarkRaw.tags = bookmarkRaw.tags.split(',').map((t) => t.trim());
                console.log(bookmarkRaw.tags);
            }

            if (bookmarkRaw.url) {
                if (bookmarkRaw.url.indexOf('http://') !== 0 && bookmarkRaw.url.indexOf('https://') !== 0) {
                    bookmarkRaw.url = 'http://' + bookmarkRaw.url;
                }
            }

            var bookmark = new Bookmark(bookmarkRaw);

            var validationErrors = bookmark.validate();
            if (validationErrors.length) {
                validationErrors.forEach(keyMessage => {
                    var feedbackMessageHtml = '<div class="text-danger">' + keyMessage.message + '</div>';
                    $currentModal.find('[name=' + keyMessage.key + ']').parent('div').append(feedbackMessageHtml);
                });
            }
            else {
                BookmarksApi.upsert(bookmark);
                $currentModal.modal('hide');
                _this.display(_this.container);
            }
        });
        // SET EDIT MODE - SHOW EDIT/DELETE BUTTONS
        $('body').on('click', '.edit-bookmarks', function(evt) {
            var $editButton = $(evt.target);
            _this.mode = _this.mode === 'view' ? 'edit' : 'view';
            console.log(_this.mode);
            if (_this.mode !== 'view') {
                $editButton.parents('.tab-pane').addClass('in-edit-mode');
            }
            else {
                $editButton.parents('.tab-pane').removeClass('in-edit-mode');
            }
        });
        // OPEN EDIT MODAL
        $('body').on('click', '.edit-bookmark', function(evt) {
            var $target = $(evt.target);
            var $container = $target.parents('.bookmark-container');
            var url = $container.data('url');

            var bookmark = BookmarksApi.getBookmarks().find((b) => b.url === url);
            $currentModal = $(_this.formModal(bookmark));
            $('#templates').append($currentModal);

            $currentModal.modal('show');
        });
        // OPEN DELETE CONFIRM MODAL
        $('body').on('click', '.delete-bookmark', function(evt) {
            var $target = $(evt.target);
            var $container = $target.parents('.bookmark-container');
            var url = $container.data('url');

            _this.deleteBookmark = BookmarksApi.getBookmarks().find((b) => b.url === url);

            $currentModal = $(_this.confirmModal());
            $('#templates').append($currentModal);

            $currentModal.modal('show');
            
        });
        // DELETE CONFIRM ACTION
        $('body').on('click', '.bookmark-delete-confirm', function(evt) {
            // todo: hide then delete - bootstrap 4 is fighting jquery hide
            // $('.bookmark-container[data-url=' + _this.deleteBookmark.url + ']').hide(100);
            BookmarksApi.delete(_this.deleteBookmark);
            $currentModal.modal('hide');
            _this.display(_this.container);
        });

        // TAG FILTERING
        $('body').on('click', '.bookmark-tag', function(evt) {
            var filterText = $(evt.target).text();
            _this.display(_this.container, filterText);

            return false;
        });
        $('body').on('click', '.bookmark-tag-filter-clear', function(evt) {
            _this.display(_this.container, null);
        });
    }
};