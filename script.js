document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '0';
  });
  
  document.getElementById('toggleBtn').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
    } else {
      sidebar.style.width = '250px';
    }
  });
  document.getElementById('sidebar').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      document.getElementById('sidebar').style.width = '0';
    }
  });