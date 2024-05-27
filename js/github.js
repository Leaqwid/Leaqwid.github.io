$(document).ready(function() {
    var username = "Leaqwid";
    var linkCounter = 0; 

    function fetchAndDisplayProjects() {
        $.ajax({
            url: "https://api.github.com/users/" + username + "/repos",
            dataType: "json",
            success: function(data) {
                var projects = $("#project-list");
                linkCounter = 0; 

                data.sort(function(a, b) {
                    return new Date(b.created_at) - new Date(a.created_at);
                });

                projects.empty();

                $.each(data, function(index, repo) {
                    var listItem = $("<li>");
                    var link = $("<a>").attr({
                        "href": repo.html_url,
                        "target": "_blank",
                        "rel": "noopener noreferrer"
                    }).text(repo.name);
                    listItem.append(link);
                    projects.append(listItem);
                    linkCounter++; 
                });

                $("#link-counter").text(linkCounter); 
            },
            error: function() {
                $("#project-list").append("<li>Eroare la încărcarea listei de proiecte.</li>");
            }
        });
    }

    fetchAndDisplayProjects();

    $(document).on("push", function(event) {
        if (event.payload && event.payload.repository) {
            fetchAndDisplayProjects();
        }
    });

    $(document).on("delete", function(event) {
        if (event.payload && event.payload.repository) {
            fetchAndDisplayProjects();
        }
    });
});
