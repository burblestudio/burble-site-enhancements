addEventListener("keydown", (event) => {

    // Get references to the buttons
    const updateButton = document.getElementsByClassName('editor-post-publish-button')[0];
    const publishButton = document.getElementById('publish');
    const newPublishButton = document.querySelector('.components-button.editor-post-publish-panel__toggle.editor-post-publish-button__button.is-primary.is-compact');
    const featuredImageButton = document.querySelector('.button.media-button.button-primary.button-large.media-button-select');
    const featuredImageButton2 = document.querySelector('.components-button.editor-post-featured-image__toggle');
    const setPostThumbnailLink = document.getElementById('set-post-thumbnail');
    const setPostThumbnailAnchor = document.querySelector('a#set-post-thumbnail');

    const editInWordPressLink = document.querySelector('.wordpress a[href*="action=edit"]');
    const wpAdminBarEditLink = document.querySelector('#wp-admin-bar-edit > a');

    const editWithBricksLink = document.querySelector('#wp-admin-bar-edit_with_bricks > a');
    const toolbarEditWithBricksLink = document.getElementById('toolbar-edit_with_bricks');
    const editWithBricksSpanLink = document.querySelector('.edit_with_bricks a[href*="bricks=run"]');

    const featuredImageEditButton = document.querySelector('button.components-button.editor-post-featured-image__preview[aria-label="Edit or replace the image"]');

    let currentHoveredRow = null;

    document.addEventListener('mouseover', (e) => {
        let parentRow = e.target.closest('#the-list tr');
        if (parentRow) {
            currentHoveredRow = parentRow;
        }
    });

    function openLinkInNewTab(link) {
        if (link) {
            window.open(link.href, '_blank');
        }
    }

    function openNewTabWithBaseURL(path) {
        const baseUrl = window.location.origin;
        const newUrl = `${baseUrl}${path}`;
        window.open(newUrl, '_blank');
    }

    // Check if Ctrl+S is pressed
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();

        if (event.shiftKey) {
            // Open in new tab
            if (updateButton) {
                openLinkInNewTab(updateButton);
            } else if (publishButton) {
                openLinkInNewTab(publishButton);
            } else if (newPublishButton) {
                openLinkInNewTab(newPublishButton);
            }
        } else {
            // Click the appropriate button
            if (updateButton) {
                updateButton.click();
            } else if (publishButton) {
                publishButton.click();
            } else if (newPublishButton) {
                newPublishButton.click();
            }
        }
    }

    // Check if Ctrl+F is pressed
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();

        if (event.shiftKey) {
            // Open in new tab
            if (featuredImageButton) {
                openLinkInNewTab(featuredImageButton);
            } else if (setPostThumbnailLink) {
                openLinkInNewTab(setPostThumbnailLink);
            } else if (setPostThumbnailAnchor) {
                openLinkInNewTab(setPostThumbnailAnchor);
            } else if (featuredImageEditButton) {
                featuredImageEditButton.click();
            }
        } else {
            // Click the appropriate button or link
            if (featuredImageButton) {
                featuredImageButton.click();
            } else if (featuredImageButton2) {
                featuredImageButton2.click();
            } else if (setPostThumbnailLink) {
                setPostThumbnailLink.click();
            } else if (setPostThumbnailAnchor) {
                setPostThumbnailAnchor.click();
            } else if (featuredImageEditButton) {
                featuredImageEditButton.click();
            }
        }
    }

   // Check if Ctrl+E is pressed
   if (event.ctrlKey && event.key.toLowerCase() === 'e') {
        event.preventDefault();

        if (event.shiftKey) {
            // Open in new tab
            if (editInWordPressLink) {
                openLinkInNewTab(editInWordPressLink);
            } else if (wpAdminBarEditLink) {
                openLinkInNewTab(wpAdminBarEditLink);
            } else {
                let hoveredEditLink = currentHoveredRow ? currentHoveredRow.querySelector('.edit a[href*="action=edit"]') : null;
                if (hoveredEditLink) {
                    openLinkInNewTab(hoveredEditLink);
                }
            }
        } else {
            // Click the appropriate button or link
            if (editInWordPressLink) {
                editInWordPressLink.click();
            } else if (wpAdminBarEditLink) {
                wpAdminBarEditLink.click();
            } else {
                let hoveredEditLink = currentHoveredRow ? currentHoveredRow.querySelector('.edit a[href*="action=edit"]') : null;
                if (hoveredEditLink) {
                    hoveredEditLink.click();
                }
            }
        }
    }

    // Check if Ctrl+K is pressed (for Edit with Bricks)
    if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();

        if (event.shiftKey) {
            // Open in new tab
            if (editWithBricksLink) {
                openLinkInNewTab(editWithBricksLink);
            } else if (toolbarEditWithBricksLink) {
                openLinkInNewTab(toolbarEditWithBricksLink);
            } else {
                let hoveredEditWithBricksLink = currentHoveredRow ? currentHoveredRow.querySelector('.edit_with_bricks a[href*="bricks=run"]') : null;
                if (hoveredEditWithBricksLink) {
                    openLinkInNewTab(hoveredEditWithBricksLink);
                }
            }
        } else {
            // Click the appropriate button or link
            if (editWithBricksLink) {
                editWithBricksLink.click();
            } else if (toolbarEditWithBricksLink) {
                toolbarEditWithBricksLink.click();
            } else {
                let hoveredEditWithBricksLink = currentHoveredRow ? currentHoveredRow.querySelector('.edit_with_bricks a[href*="bricks=run"]') : null;
                if (hoveredEditWithBricksLink) {
                    hoveredEditWithBricksLink.click();
                }
            }
        }
    }

    // Check if Ctrl+Shift+Numpad key is pressed for specific URL's
    if (event.ctrlKey && event.shiftKey) {
        switch (event.key) {
            case '1':
                openNewTabWithBaseURL('/wp-admin/tools.php?page=wpcodebox2');
                break;
            case '2':
                openNewTabWithBaseURL('/wp-admin/options-permalink.php');
                break;
            case '3':
                openNewTabWithBaseURL('/wp-admin/options-reading.php');
                break;
            case '4':
                openNewTabWithBaseURL('/wp-admin/plugins.php');
                break;
            case '5':
                openNewTabWithBaseURL('/wp-admin/edit.php?post_type=page');
                break;
            case '6':
                openNewTabWithBaseURL('/wp-admin/users.php');
                break;
            case '7':
                openNewTabWithBaseURL('/wp-admin/admin.php?page=ws-form');
                break;
            case '8':
                openNewTabWithBaseURL('/wp-admin/update-core.php');
                break;
            case '9':
                openNewTabWithBaseURL('/wp-admin/index.php');
                break;
            case '0':
                openNewTabWithBaseURL('/wp-admin/edit.php?post_type=bricks_template');
                break;
            default:
                break;
        }
    }
});
