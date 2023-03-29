import '../Styles/SideMenu.css'
    
  
  const SideMenu = ()=>{
      return(
          
          
          <div>
    <input type="checkbox" id="check"></input>
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header>Grupo 01</header>
      <a href="#" class="active">
        <i class="fas fa-chart-bar"></i>
        <span>Dashboard</span>
      </a>
      <a href="#">
        <i class="fas fa-calendar"></i>
        <span>Mês Atual</span>
      </a>
        
      <a href="#">
        <i class="fas fa-temperature-low"></i>
        <span>Temperaturas</span>
      </a>
      <a href="#">
         <i class="fas fa-calendar"></i>
        <span>Acionamentos</span>
      </a>
      <a href="#">
        <i class="far fa-question-circle"></i>
        <span>Sobre o Projeto</span>
      </a>
      <a href="#">
        <i class="fas fa-sliders-h"></i>
        <span>Serviços</span>
      </a>
      <a href="#">
        <i class="far fa-envelope"></i>
        <span>Contato</span>
      </a>
    </div>

</div>

          
        
      )
  }
              
export default SideMenu;              